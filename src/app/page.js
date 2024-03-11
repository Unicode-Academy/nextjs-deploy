import getBlogs from "@/helpers/getBlogs";
import mdToHtml from "@/helpers/mdToHtml";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }) {
  const { data, max_page } = await getBlogs(
    { ...searchParams },
    searchParams.page,
  );
  const blogs = data?.length
    ? data?.map((data) => ({
        ...data,
        content: mdToHtml(data.content),
      }))
    : [];
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Blogs - Docker - Nginx</h1>
      </header>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.blog_id} className="mb-2">
            <Link href={`/${blog.blog_id}`}>
              {blog.title}
              <Image
                src={blog.image_url}
                width={400}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex pb-4">
        {Array.from({ length: max_page }, (_, i) => (
          <Link href={`?page=${i + 1}`} className={`btn`} key={i}>
            {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}
