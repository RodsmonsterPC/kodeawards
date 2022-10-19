const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51Lq12jBwAa8a1liZ7qiB9CeuGDogaxCVi1lUHZJAzscnXHFYAii1PaSLAo9mDqbuBK5xGdKgZ8XiW56RL5oCFrnO00WY4oJYTR"
);

const charge = await stripe.charges.retrieve("ch_3Lq1rOBwAa8a1liZ0XDEnkZo", {
  apiKey:
    "sk_test_51Lq12jBwAa8a1liZ7qiB9CeuGDogaxCVi1lUHZJAzscnXHFYAii1PaSLAo9mDqbuBK5xGdKgZ8XiW56RL5oCFrnO00WY4oJYTR",
});

stripe.charges.retrieve("ch_3Lq1rOBwAa8a1liZ0XDEnkZo", {
  stripeAccount: "acct_1Lq12jBwAa8a1liZ",
});
