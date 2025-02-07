export const scrollTo = (id: string, navigate: (arg0: string) => void) => {
  const element = document.getElementById(id);
  if (element) {
    return element.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  navigate("/");
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, 0);
};
