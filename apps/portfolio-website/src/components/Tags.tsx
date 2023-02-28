type TagProp = {
  value: string | string[];
}

export const Tags = (props: TagProp) => {
  const { value } = props;
  return (
    <div className="flex justify-center items-center p-3 px-6 md:mr-6 border-2
    rounded-2xl baseline dark:dark:bg-slate-800
    hover:opacity-100">
      {value}
    </div>
  );
};
