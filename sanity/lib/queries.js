import { defineQuery } from "next-sanity";

export const allProjectsQuery = `*[_type == "project"] | order(_createdAt desc) {
	_id,
	name,
	"slug": slug.current,
	"thumbnail": thumbnail.asset->url,
	images
   }`;

export const singleProjectQuery = `*[_type == "project" && defined(slug.current)] | order(order asc) {
	_id,
	name,
	"slug": slug.current,
	"thumbnail": thumbnail.asset->url,
	images[]{
	  "url": asset->url
	},
	layout,
	size,
	type,
	location,
	cost
   }`;

   export const singleProjectQueryItem =
  defineQuery(`*[_type == "project" && slug.current == $slug][0]{
	_id,
	name,
	"slug": slug.current,
	"thumbnail": thumbnail.asset->url,
	images[]{
	  "url": asset->url
	},
	layout,
	size,
	type,
	location,
	cost
   }`);