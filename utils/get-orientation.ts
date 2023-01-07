export const getOrientation = (height: number): "portrait" | "landscape" => {
  return height > 400 ? "portrait" : "landscape";
};
