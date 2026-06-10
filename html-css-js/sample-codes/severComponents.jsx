import { Suspense } from 'react';
import db from './database'
import Comments from './Comments'

async function page(id) {
    const note = await db.notes.get(id);
    const commentsPromise = db.comments.get(note.id);

    return(
        <div>
            {note}
            <Suspense fallback={<p>Loading Comments...</p>}>
                <Comments commentsPromise={commentsPromise}/>
            </Suspense>
        </div>
    )
}