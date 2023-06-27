import { Link } from "@inertiajs/react";

const Paginum = ({meta}) => {
    console.log(meta)
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length-1].url;
    const current = meta.current_page;

    return (
    <div className="join">
        {prev && <Link href={prev} className="join-item btn">«</Link>}
        <Link className="join-item btn">Page {current}</Link>
        {next && <Link href={next} className="join-item btn">»</Link>}
    </div>
    )
}

export default Paginum