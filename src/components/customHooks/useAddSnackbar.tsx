import { useSnackbar } from "notistack";

export const useAddSnackbar = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const addSnackbar = (text: string) => {
    enqueueSnackbar(text, { variant: "success", autoHideDuration: 4000 });
  };

  return { addSnackbar };
};
