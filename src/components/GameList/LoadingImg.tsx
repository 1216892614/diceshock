import Image from "next/image";
import React, { useState } from "react";

const LoadingImg: React.FC<React.ComponentProps<typeof Image>> = (props) => {
    const [isLoading, loading] = useState<boolean>(true);

    return (
        <Image
            className={
                isLoading ? `skeleton ${props.className}` : props.className
            }
            {...props}
            alt={props.alt}
            onLoadingComplete={() => loading(false)}
        />
    );
};

export default LoadingImg;
