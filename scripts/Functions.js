exports.shorten = (desc, charAmount) => {
  let descLines = desc.split(`\r\n`);
  if (descLines.length > 3) {
    descLines = [descLines[0], descLines[1], descLines[2]];
    return descLines.join("\r\n") + "...";
  }
  if (desc.length > charAmount) {
    return desc.slice(0, charAmount) + "...";
  }
  return desc;
};
