'use client';

import './globals.css'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {

    const router = useRouter()

    return (
        <div className='notFoundBox'>
            <h1 className='notFoundTitle'>404 | Pagina non trovata</h1>
            <h2 className='notFoundTitle2'>Ops, ti sei perso?</h2>
            <div className='notFoundButtonBox'>
                <button onClick={() => router.back()} className='backButton'>Torna indietro</button>
                <Link href={'/'} className='backButtonToHome'>Torna alla Home</Link>
            </div>
        </div>
    )
}