const GET = ({ params, request }) => {
  return new Response(
    JSON.stringify({
      message: "¡Esto es un GET!"
    })
  );
};

export { GET };
