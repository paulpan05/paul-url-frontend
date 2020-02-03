export type GetResponse = {
  id: number
  route: string
  originalUrl: string
  description: string
}

const getAll = async (): Promise<GetResponse[]> => {
  try {
    const response: Response = await fetch('https://paul-url.herokuapp.com/v1/api')
    const result: GetResponse[] = await handleErrors(response);
    return result;
  } catch (error) {
    return new Array<GetResponse>();
  }
}

const getRoute = async (routeName: string): Promise<GetResponse> => {
  try {
    const response: Response = await fetch(`https://paul-url.herokuapp.com/v1/api/${routeName}`);
    const result: GetResponse = await handleErrors(response);
    return result;
  } catch (error) {
    return {id: -1, route: "", originalUrl: "", description: ""};
  }
}

const handleErrors = (response: Response): Promise<any> => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

export { getAll, getRoute };