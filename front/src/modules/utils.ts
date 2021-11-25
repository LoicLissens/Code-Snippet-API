export const createUploadLink = () => {
  const input: HTMLInputElement = document.createElement("input");
  input.setAttribute("type", "file");

  input.click();

  const image = input.addEventListener("change", async (e) => {
    if (!input.files) return;
    const formData = new FormData();
    formData.append("files", input.files[0], input.files[0].name);
    return formData;
  });
};
