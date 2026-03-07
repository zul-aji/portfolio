function ContactData() {
    return (
        <div className="relative flex flex-col items-center justify-center shrink-0 w-full h-full rounded-4xl bg-[#17301C]/50 backdrop-blur-sm overflow-hidden p-4 sm:p-8">
            <div className="flex-1 flex flex-col items-center justify-center w-full py-10 px-4 sm:px-12 lg:px-24 max-h-full overflow-y-auto">
                <p className="[font-size:clamp(1.5rem,11vmin,15rem)] text-white text-center leading-tight">
                    Let's have a{' '}
                    <a
                        href="mailto:zulfiqar.aji@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white hover:text-[#88ccb4] transition-colors group"
                    >
                        chat
                        <span className="inline-block transition-transform duration-200 group-hover:-translate-y-2 group-hover:translate-x-2">
                            ↗
                        </span>
                    </a>
                    ,{' '}
                </p>
                <p className="[font-size:clamp(1.5rem,11vmin,15rem)] text-white text-center leading-tight">
                    <a
                        href="https://www.linkedin.com/in/zul-aji/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white hover:text-[#88ccb4] transition-colors group"
                    >
                        connect
                        <span className="inline-block transition-transform duration-200 group-hover:-translate-y-2 group-hover:translate-x-2">
                            ↗
                        </span>
                    </a>
                    {' '}with me,
                </p>
                <p className="[font-size:clamp(1.5rem,11vmin,15rem)] text-white text-center leading-tight">
                    or{' '}
                    <a
                        href="https://github.com/zul-aji"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white hover:text-[#88ccb4] transition-colors group"
                    >
                        browse
                        <span className="inline-block transition-transform duration-200 group-hover:-translate-y-2 group-hover:translate-x-2">
                            ↗
                        </span>
                    </a>
                    {' '}my other projects!
                </p>
            </div>
        </div>
    );
}

export default ContactData;