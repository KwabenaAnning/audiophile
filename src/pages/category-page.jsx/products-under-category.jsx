import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryProducts({ categoryProducts }) {
  // If there are no products, render nothing.
  if (!categoryProducts || categoryProducts.length === 0) {
    return null;
  }

  return (

    <div className='section-padding mt-16 space-y-32 tablet:mt-28 desktop:mt-40'>
      {categoryProducts.map(({ slug, name, categoryImage, description, isNew, category }) => {
        // Destructuring for cleaner code, though not strictly necessary.
        const productName = name.substring(0, name.lastIndexOf(' '));

        return (
          // A SINGLE PRODUCT SECTION
          // - `flex-col` on mobile, switching to `desktop:flex-row`.
          // - `desktop:even:flex-row-reverse` is the key: it flips the layout for every even-numbered item
          //   (the 2nd, 4th, etc.), creating the alternating pattern.
          <section
            key={slug}
            className="flex flex-col items-center gap-8 text-center desktop:flex-row desktop:gap-32 desktop:even:flex-row-reverse"
          >
            <picture className="desktop:w-1/2">
              <source
                srcSet={categoryImage.desktop} media='(min-width: 769px)' />
              <source
                srcSet={categoryImage.tablet} media='(min-width: 376px)' />
              <img
                className='rounded-lg w-full'
                alt={`${name} product image`}
                src={categoryImage.mobile}
              />
            </picture>

            {/* INFO CONTAINER (also takes up half the width on desktop) */}
            <div className="flex flex-col items-center gap-6 desktop:w-1/2 desktop:items-start desktop:text-left">
              {isNew && (
                <p className='overline-text text-accent'>
                  NEW PRODUCT
                </p>
              )}

              {/* The title has a block element span to ensure the category name appears on a new line */}
              <h2 className='h2'>
                {productName} <span className="block">{category}</span>
              </h2>

              <p>{description}</p>

              {/* This uses the reusable .btn-accent class for consistency */}
              <Link
                to={`/${slug}`}
                onClick={() => window.scrollTo(0, 0)}
                className='btn-accent mt-2'
              >
                See Product
              </Link>
            </div>
          </section>
        )
      })}
    </div>
  )
}