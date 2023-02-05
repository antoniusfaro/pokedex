export const textMixin = {
  filters: {
    title(val) {
      return val
        .replaceAll("-", " ")
        .split(" ")
        .map(e => e[0].toUpperCase() + e.slice(1))
        .join(" ");
    }
  }
};
