<template>
  <CoverTitle />
  <div class="text-center">
    <div class="h-32"></div>
    <div>
      About this publication
    </div>
    <div class="h-32"></div>
    <div class="font-black text-4xl font-serif">
      The Wonderful
    </div>
    <div class="h-4"></div>
    <div class="font-black text-2xl font-serif">
      Wizard of Oz
    </div>
    <div class="h-16"></div>
    <div>
      published in 1900 by
    </div>
    <div class="h-4"></div>
    <div class="text-4xl">
      <a class="text-lime-800 font-semibold" href="https://en.wikipedia.org/wiki/L._Frank_Baum">
        L. Frank Baum
      </a>
    </div>
  </div>
  <div class="h-32"></div>
  <div class="grid grid-cols-1 gap-8">
    <div>
This webbook was produced for King Book by Grant King using the build-a-book tool and the source text from an ebook that was produced for Standard Ebooks by Michael Atkinson, and is based on a transcription produced in 1993 by Distributed Proofreaders for Project Gutenberg and on digital scans from the Internet Archive.
</div>

  </div>
  <div class="h-32"></div>
  <div class="border-4 border-black/40 rounded text-lg">
    <div
      class="grid grid-cols-1 gap-2 font-semibold text-center font-serif bg-black/10 rounded py-16 border-16 border-double border-white/80">
      
        <a href="https://github.com/grant-king/wizard-oz-book" target="github.com"
            class="grid grid-cols-2 border-b-2 border-dotted m-2 p-2">
            <div>
                static app code for this webbook
            </div>
            <div class="text-lime-800">
                github.com
            </div>
        </a>
        
        <a href="https://standardebooks.org/ebooks/l-frank-baum/the-wonderful-wizard-of-oz" target="standardebooks.org"
            class="grid grid-cols-2 border-b-2 border-dotted m-2 p-2">
            <div>
                source text
            </div>
            <div class="text-lime-800">
                standardebooks.org
            </div>
        </a>
        
        <a href="https://github.com/michael-77" target="github.com"
            class="grid grid-cols-2 border-b-2 border-dotted m-2 p-2">
            <div>
                Michael Atkinson
            </div>
            <div class="text-lime-800">
                github.com
            </div>
        </a>
        
        <a href="https://www.pgdp.net/c/" target="www.pgdp.net"
            class="grid grid-cols-2 border-b-2 border-dotted m-2 p-2">
            <div>
                Distributed Proofreaders
            </div>
            <div class="text-lime-800">
                www.pgdp.net
            </div>
        </a>
        
        <a href="https://archive.org/details/wonderfulwizardo00baumiala" target="archive.org"
            class="grid grid-cols-2 border-b-2 border-dotted m-2 p-2">
            <div>
                Internet Archive
            </div>
            <div class="text-lime-800">
                archive.org
            </div>
        </a>
        
        <a href="https://www.gutenberg.org/ebooks/55" target="www.gutenberg.org"
            class="grid grid-cols-2 border-b-2 border-dotted m-2 p-2">
            <div>
                Project Gutenberg
            </div>
            <div class="text-lime-800">
                www.gutenberg.org
            </div>
        </a>
        
        <a href="https://kingbook.org" target="kingbook.org"
            class="grid grid-cols-2 border-b-2 border-dotted m-2 p-2">
            <div>
                King Book
            </div>
            <div class="text-lime-800">
                kingbook.org
            </div>
        </a>
        
        <a href="https://grantking.dev" target="grantking.dev"
            class="grid grid-cols-2 border-b-2 border-dotted m-2 p-2">
            <div>
                Grant King
            </div>
            <div class="text-lime-800">
                grantking.dev
            </div>
        </a>
        
        <a href="https://github.com/grant-king/buildabook-book" target="github.com"
            class="grid grid-cols-2 border-b-2 border-dotted m-2 p-2">
            <div>
                webbook template
            </div>
            <div class="text-lime-800">
                github.com
            </div>
        </a>
        
        <a href="https://build.kingbook.org" target="build.kingbook.org"
            class="grid grid-cols-2 border-b-2 border-dotted m-2 p-2">
            <div>
                build-a-book tool
            </div>
            <div class="text-lime-800">
                build.kingbook.org
            </div>
        </a>
        
    </div>
  </div>
  <div class="h-64"></div>
  <div class="h-64"></div>
  <div class="text-center">
    <div class="font-mono text-xs">
      <div>
        This static webbook was built with
      </div>
      <div class="h-2"></div>
      <div>
        <a class="text-amber-800 font-bold border-4 border-double p-1 rounded" href="https://kingbook.org">
          King Book
        </a>
      </div>
    </div>
    <div class="h-64"></div>
  </div>


</template>

<script setup>
import CoverTitle from '@/components/CoverTitle.vue';

</script>