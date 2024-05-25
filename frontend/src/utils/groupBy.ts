export const groupBy = (arr: any[], property: string) => {
  const sections = arr.reduce((memo, x) => {
    if (!memo[x[property]]) memo[x[property]] = [];
    memo[x[property]].push(x);
    return memo;
  }, {});

  return Object.values(sections);
};
