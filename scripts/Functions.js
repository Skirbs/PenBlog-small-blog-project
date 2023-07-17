exports.shorten = (desc, charAmount) => {
  if (desc.length > charAmount) {
    return desc.slice(0, charAmount) + "...";
  }
  return desc;
};
