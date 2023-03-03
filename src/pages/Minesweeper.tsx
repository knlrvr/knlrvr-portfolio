import Minesweeper from '@/components/Minesweeper/Game'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewCursor from '@/components/Cursor'

export default function Game() {
    return (
        <div className="bg-gray-200">
            <NewCursor />
            <Header />
            <Footer />
            <Minesweeper />
        </div>
    )
}