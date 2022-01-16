// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      axios
        .post<{ subscription: { subscriber: { id: string } } }>(
          `https://api.convertkit.com/v3/forms/${req.body.formId}/subscribe`,
          {
            api_key: process.env.CONVERTKIT_API_KEY,
            email: req.body.email,
            first_name: req.body.name ? req.body.name.split(" ")[0] : undefined,
            fields: {
              organization: req.body.organization
            }
          }
        )
        .then((sub) =>
          res.status(200).json({ id: sub.data.subscription.subscriber.id })
        );
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
