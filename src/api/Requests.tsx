export type GetResponse = {
  id: number
  route: string
  originalUrl: string
  description: string
}

const getAll = async () => {
  try {
    const response: Response = await fetch('https://paul-url.herokuapp.com/v1/api')
    const result: GetResponse[] = await handleErrors(response);
    return result;
  } catch (error) {
    return new Array<GetResponse>();
  }
}

const handleErrors = (response: Response): Promise<GetResponse[]> => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

export { getAll };