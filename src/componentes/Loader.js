import React from 'react';
import '../assests/styles/loader.css'

const Loader = () => {
    return (
        <div className='overlay'>
            <div className="lds-ring">
                <div>
                    </div>
                        <div>
                            </div>
                            <div>
                        </div>
                    <div>
                </div>
            </div>
        </div>
        )
};

export default Loader;