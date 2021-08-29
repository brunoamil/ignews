import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1, name: 'Bruno'},
    {id: 2, name: 'Teste'},
    {id: 3, name: 'tex'},
    {id: 4, name: 'xx'},

  ]

  return response.json(users);
}