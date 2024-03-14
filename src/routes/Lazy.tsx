import { lazy, Suspense } from "react";
import Loading from "@/loading/Loading";
import { useSelector } from "react-redux";
import { RootState } from "@/stores";
import TemplateMember from "./TemplateMember";
export const lazyFn = (importFunc: any, access: boolean = true) => {

    const authenStore = useSelector((state: RootState) => state.authenter);
    if (!access || authenStore.data?.role === "member") {
        return <>
            <TemplateMember />
        </>
    }



    const LazyComponent = lazy(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(importFunc());
            }, 1000);
        });
    });

    return <Suspense fallback={<Loading />}>
        <LazyComponent />
    </Suspense>;
};    
