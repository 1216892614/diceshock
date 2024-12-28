import Image from "next/image";
import React, { useState } from "react";

const LoadingImg: React.FC<React.ComponentProps<typeof Image>> = ({
    ...props
}) => {
    const [isLoading, loading] = useState<boolean>(true);

    if (isLoading) return <span className={`skeleton ${props.className}`} />;

    return (
        <Image
            {...props}
            alt={props.alt}
            onLoadingComplete={() => loading(false)}
        />
    );
};

export default LoadingImg;
