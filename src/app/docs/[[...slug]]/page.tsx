import { notFound } from "next/navigation"

export default function Docs({ params }: {
    params: {
        slug: string[]
    }
}) {
    if (params.slug?.length === 2) {
        return <div>
            <p>{params.slug}</p>
            Viewing docs of feature {params.slug[0]} of concept {params.slug[1]}
        </div>
    } else if (params.slug?.length === 1) {
        if (parseInt(params.slug[0]) > 100) return notFound();
        return <div>
            <p>{params.slug}</p>
            Viewing docs of feature {params.slug[0]}
        </div>
    }
    return <div>
        <p>{params.slug}</p>
        Docs Home Page
    </div>
}