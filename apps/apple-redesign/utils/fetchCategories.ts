export const fetchCategories = async () => {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`);
  const data = await res.json();
  return data;
};
