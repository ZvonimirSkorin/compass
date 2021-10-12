// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
  AboutSec1:any,
  Cities:any,
  Name:string,
  GaleryCircleImages:string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const query=req.query;
   
    const country =  require('./../../../public/Countries/'+query.id);
  res.status(200).json({ AboutSec1: country.AboutSec1,Cities:country.Cities,Name:country.Name,GaleryCircleImages:country.GaleryCircleImages })
}
