import React from "react";

type Props = {
  params: {
    id: string;
  };
};

function Detail({ params: { id } }: Props) {
  console.log(id);
  return <div>Detail</div>;
}

export default Detail;
