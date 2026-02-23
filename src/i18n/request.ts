import {getRequestConfig} from 'next-intl/server';
import {cookies, headers} from 'next/headers';

export default getRequestConfig(async () => {
    const cookieStore = await cookies();
    const headerStore = await headers();

    const browserLocale = (() => {

        let locale = headerStore.get("accept-language") ?? "";

        locale = locale?.split(",")[0];

        if (!locale.startsWith("zh")) {
            locale = locale.split("-")[0];
        }

        return locale;
    })();

    const cookieLocale = (() => {
        return cookieStore.get("NEXT_LOCALE")?.value;
    })();

    const locale = cookieLocale || browserLocale || "en";
    return {
        locale,
        messages: {
            ...(await import(`../../messages/${locale}.json`)).default,
            // ...(await import(`../../messages/zod/${locale}.json`)).default
        },
    };
});