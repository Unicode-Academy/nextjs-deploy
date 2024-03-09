import React from 'react';
import { getBlog } from '@/helpers/getBlogs';
import mdToHtml from '@/helpers/mdToHtml.js';
import Link from 'next/link';

export default async function Blog({ params }) {
	const { id } = params;
	const blog = await getBlog(id);

	if (!blog.blog_id) return <span>Loading...</span>;
	const content = mdToHtml(blog.content);
	return (
		<>
			<Link href={'/'}>Back Home</Link>
			<div className='flex'>
				<h1>{blog.title}</h1>
				<img src={blog.image_url} width={200} />
			</div>
			<div className='content' dangerouslySetInnerHTML={{ __html: content }} />
			<Link href={'/'}>Back Home</Link>
		</>
	);
}
