export type GetResponse = {
  route: string
  originalUrl: string
  description: string
}

const baseUrl = "https://jyb7pm4rph.execute-api.us-east-1.amazonaws.com/prod/"

const getAll = async (): Promise<GetResponse[]> => {
  try {
    const response: Response = await fetch(baseUrl)
    const result: GetResponse[] = await handleErrors(response);
    return result;
  } catch (error) {
    return new Array<GetResponse>();
  }
}

const getRoute = async (routeName: string): Promise<GetResponse | null> => {
  try {
    const response: Response = await fetch(`${baseUrl}${routeName}`);
    const result: GetResponse = await handleErrors(response);
    return result;
  } catch (error) {
    return null;
  }
}

const handleErrors = (response: Response): Promise<any> => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

export { getAll, getRoute };