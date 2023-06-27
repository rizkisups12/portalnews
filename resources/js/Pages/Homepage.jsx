import Newslist from '@/Components/Homepage/Newslist';
import Navbar from '@/Components/Navbar';
import Paginum from '@/Components/Homepage/Paginum';
import { Link, Head } from '@inertiajs/react';

export default function Homepage(props) {
    return (
        <div className='min-h-screen bg-slate-50'>
            <Navbar />
            <Head title={props.title} />
            <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4'>
                <Newslist news={props.news.data} />
            </div>
            <div className='flex justify-center items-center'>
                <Paginum meta={props.news.meta} />
            </div>
        </div>
    )
}
