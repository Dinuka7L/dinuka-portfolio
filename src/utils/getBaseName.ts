const getBaseName = (): string => {
  return import.meta.env.DEV ? '/' : '/dinuka-portfolio/';
};

export default getBaseName;
