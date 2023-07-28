<template>
    <div class="bg-base-200">
        <div class="navbar px-4 md:max-w-2xl md:mx-auto">
            <div class="navbar-start">
                <NuxtLink to="/">
                    <span class="text-xl text-secondary">king</span>
                    <span class="text-xl">.gdn</span>
                </NuxtLink>
            </div>
            <div class="navbar-center">
            </div>
            <div class="navbar-end gap-4">
                <ThemeToggle />
                <NuxtLink href="/projects">projects</NuxtLink>
                <NuxtLink href="/updates">updates</NuxtLink>
                <NuxtLink href="/contact">contact</NuxtLink>
            </div>
        </div>
    </div>
</template>
