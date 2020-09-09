import React, { useState } from 'react';
import './StoryForm.css';

export default function StoryForm() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [isFinished, setIsFinished] = useState(false);
    return (
        <div className='StoryForm'>
            <form>
                <label>
                    What is your story's name?:
                    <input type='text' id='name' onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                    What type of story is this?:
                    <input type='text' id='type' onChange={(e) => setType(e.target.value)}/>
                </label>
                <label>
                    Is your story finished?:
                    <input type='checkbox' id='isFinished' onChange={(e) => setIsFinished(e.target.checked)} />
                </label>
                <button onClick={(e) => { 
                    e.preventDefault();
                    console.log(name, type, isFinished);
                }}>Add Story To My Library</button>
            </form>
        </div>
    );
}
