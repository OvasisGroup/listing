import React from 'react'

interface DetailComponentProps {
  id: number;
  title: string;
  body: string;
}

export default function DetailComponentProps({detail}: {detail: DetailComponentProps}) {
  const { title, body } = detail;
  // const { id } = useParams();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700 whitespace-pre-line">{body}</p>
    </div>
  )
}
