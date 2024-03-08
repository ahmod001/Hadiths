<script setup>
const props = defineProps({
    hadith: Object
})

const { id, hadithNumber, hadithArabic, englishNarrator, hadithEnglish, status } = props.hadith;

</script>

<template>
    <div class="bg-white dark:bg-hadith-dark-card rounded-b-xl p-6 xs:py-1 md-max:px-4">
        <div class=" text-green-600 text-xl mb-2">
            {{ hadithNumber }}.
        </div>
        <div class="arabic dark:text-hadith-deepoffwhite w-full text-right mb-8 xss:mt-4 xs:mt-4 xs:leading-[40px]"
            style="line-height: 2; word-spacing: 5px; font-size: 22px; font-family: kfgq;">
            <p>
                {{ hadithArabic }}

            </p>
        </div>
        <p class="style-Kalpurush-primary text-primary leading-5 xss:text-[15px] xss:leading-7"
            style="line-height: 1.8; font-size: 17px;">

            {{ englishNarrator }}

        </p>
        <p class="mt-4 style-Kalpurush dark:text-hadith-deepoffwhite leading-10"
            style="line-height: 1.8; font-size: 17px;"><span>

                {{ hadithEnglish }}

            </span></p>
        <div class="mt-8 ">
            <div class="flex items-center gap-2 mt-4">
                <div class="style-Kalpurush-webKit dark:text-hadith-deepoffwhite text-base leading-[18.15px]">
                    Value of Hadith:

                </div><button
                    class="pt-1.5 pb-1 rounded-[.3rem] style-Kalpurush-dropdown text-white px-3 flex items-center justify-center font-medium text-sm"
                    style="background-color: rgb(70, 184, 145);">
                    <p>

                        {{ status }} hadith

                    </p>
                </button>
            </div>
        </div>
    </div>
</template>