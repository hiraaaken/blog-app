import {
  createClient,
  type MicroCMSQueries,
  type MicroCMSImage,
} from "microcms-js-sdk";
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from "$env/static/private";
import * as cheerio from "cheerio";
import hljs from "highlight.js";

// MicroCMS のクライアントを生成
const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
});

// ブログ記事の型定義
export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  lead: string;
  content: string;
  thumbnail?: MicroCMSImage;
  tags: Tag[];
  navigation: {
    prev: Blog | null;
    next: Blog | null;
  };
  toc: {
    text: string;
    id: string;
    name: string;
  }[];
};

// タグの型定義
export type Tag = {
  id: string;
  name: string;
  revisedAt: string;
  sortOrders: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Skill = {
  id: string;
  name: string;
  image: MicroCMSImage;
  from: string;
  usedInBusiness: boolean;
  category: string[];
  comment: string;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

// ブログ記事一覧のレスポンス型定義
export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};

// タグ一覧のレスポンス型定義
export type TagResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Tag[];
};

export type SkillResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Skill[];
};

/**
 * 公開記事一覧を取得する関数
 */
export const getPublishedBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({
    endpoint: "blogs",
    queries: {
      ...queries,
    },
  });
};

/**
 * 記事詳細を取得する関数
 * @param contentId 記事ID
 * @param queries クエリ
 */
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
): Promise<Blog> => {
  const blog = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });

  if (!blog) {
    throw new Error("ブログ記事が見つかりませんでした");
  }

  const prev = await client.get<BlogResponse>({
    endpoint: "blogs",
    queries: {
      limit: 1,
      orders: "-publishedAt",
      fields: "id,title",
      filters: `publishedAt[less_than]${blog.publishedAt}`,
    },
  });
  const next = await client.get<BlogResponse>({
    endpoint: "blogs",
    queries: {
      limit: 1,
      orders: "publishedAt",
      fields: "id,title",
      filters: `publishedAt[greater_than]${blog.publishedAt}`,
    },
  });

  const prevBlog = prev.contents[0] || null;
  const nextBlog = next.contents[0] || null;

  // コードブロックのシンタックスハイライトとラベル追加
  const $ = cheerio.load(blog.content);
  $("pre code").each((_, elm) => {
    const language = $(elm).attr("class")?.replace("language-", "") || "";
    const result = language
      ? hljs.highlight($(elm).text(), {
          language,
        })
      : hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");

    const $copyButton = $(`<button class="copy-button">Copy</button>`);
    $(elm).parent().append($copyButton);
  });

  // 目次を作成する
  const headings = $("h1, h2, h3").toArray();
  const toc = headings.map((heading) => ({
    text: $(heading).text(),
    id: $(heading).attr("id") || "",
    name: heading.tagName,
  }));

  return {
    ...blog,
    content: $.html(),
    navigation: {
      prev: prevBlog,
      next: nextBlog,
    },
    toc,
  };
};

/**
 * タグ一覧を取得する関数
 */
export const getTags = async () => {
  return await client.get<TagResponse>({
    endpoint: "tags",
  });
};

/**
 * スキル一覧を取得する関数
 */
export const getSkills = async () => {
  return await client.get<SkillResponse>({
    endpoint: "skills",
  });
};
