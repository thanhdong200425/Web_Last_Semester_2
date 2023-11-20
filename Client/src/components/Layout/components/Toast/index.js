import { useState } from 'react';

function Toast({ title = '', message = '', type = 'info', duration = 3000 }) {
    const [showToast, setShowToast] = useState(true);
    const autoRemoveId = setTimeout(function () {
        setShowToast(false);
    }, duration + 1000);
    const closeToast = () => {
        setShowToast(false);
        clearTimeout(autoRemoveId);
    };
    const icons = {
        success: 'fas fa-check-circle',
        info: 'fas fa-info-circle',
        warning: 'fas fa-exclamation-circle',
        error: 'fas fa-exclamation-circle',
    };
    const primaryColors = {
        success: 'green-400',
        info: 'blue-400',
        warning: 'yellow-400',
        error: 'red-600',
    };
    const icon = icons[type];
    const color = primaryColors[type];

    const delay = (duration / 1000).toFixed(2);

    return (
        <>
            {showToast ? (
                <div
                    className={
                        'w-fit opacity-0 bg-primary  animate-[toleft_.3s_ease_,faceOut_' +
                        delay +
                        's_linear] flex items-center gap-5 px-5 py-3 border-l-4 shadow-sm shadow-gray-500 border-' +
                        color
                    }
                >
                    <div>
                        <i className={'text-' + color + ' ' + icon} />
                    </div>
                    <div>
                        <h3 className="font-bold">{title}</h3>
                        <p>{message}</p>
                    </div>
                    <div onClick={closeToast}>
                        <i className="opacity-70 fas fa-times"></i>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default Toast;
