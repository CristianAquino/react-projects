function gifData(data: any) {
  return {
    id: data.id,
    title: data.title,
    slug: data.slug,
    url: data.images.downsized_medium.url,
  };
}

export { gifData };
