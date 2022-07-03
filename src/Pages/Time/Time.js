import React from 'react';

const Time = () => {
    let style="--value:10;"
    let style2="--value:24;"
    let style3="--value:47;"
    return (
        <div>
            <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div style={{
                    background:"#A337EA"
                }} class="flex flex-col p-2 rounded-box text-neutral-content">
                   <h1 className="text-5xl font-bold">10</h1>
                    hours
                </div>
                <div style={{
                    background:"#A337EA"
                }}
                 class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <h1 className="text-5xl font-bold">10</h1>
                    min
                </div>
                <div style={{
                    background:"#A337EA"
                }}
                 class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <h1 className="text-5xl font-bold">10</h1>
                    sec
                </div>
            </div>
        </div>
    );
};

export default Time;