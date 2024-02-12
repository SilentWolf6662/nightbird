import { Fragment } from "react";
function CustomHeader({ title, breadcrumb, breadcrumbActive }) {
    return (
        <>
            <header className="bg-[url('/img/hm-gallery-bg.jpg')] bg-no-repeat text-primary h-72 flex justify-center">
                <div className="absolute bg-black bg-opacity-60 w-full h-72"></div>
                <div className="flex flex-col justify-center items-center z-10">
                    <h1 className="font-greatVibes text-5xl">{title}</h1>
                    <p className="text-center">
                        {Array.isArray(breadcrumb) && breadcrumb.map((item, index) =>
                            item === 'Home' ? (
                                <Fragment key={index}>
                                    <a href={`/`.toLowerCase()} className="inline">{item}</a>
                                    {' > '}
                                </Fragment>
                            ) : (
                                <Fragment key={index}>
                                    <a href={`/${item}`.toLowerCase()} className="inline">{item}</a>
                                    {' > '}
                                </Fragment>
                            )
                        )}
                        <span className="text-accent inline">{breadcrumbActive}</span>
                    </p>
                </div>
            </header>
        </>
    );
}

export default CustomHeader;