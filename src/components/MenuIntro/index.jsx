import Image from 'next/image';
import cn from 'classnames';
import SubHeading from 'components/SubHeading';
import { menuItems } from 'data/restaurantData';

import images from 'constants/images';

import styles from './styles.module.scss';

const MenuIntro = ({ info, slug }) => {
  // Find the menu item by slug
  const menuItem = menuItems.find(item => item.slug === slug);

  return (
    <div className={cn(styles.intro_container, 'app_bg', 'section_padding')} id='menu-intro'>
      <div className={cn('app_container', 'app_wrapper')}>
        <div className={cn('app_wrapper_img','app_wrapper_img_reverse')}>
          <div className={cn(styles.wrapper_img, 'img_padding')} >
            <Image
              src={menuItem?.metadata?.menu?.[0]?.picture?.imgix_url || '/assets/bg.png'}
              alt='intro_image'
              objectFit='cover'
              width={450}
              height={500}
              />
          </div>
        </div>
        <div className={cn(styles.wrapper_content,'app_wrapper_info')}>
          <SubHeading title='Try it!' />
          <h1 className='headtext_cormorant'>{menuItem?.title}</h1>
          <div className={styles.intro_content}>
            <div>
              <p className={styles.intro_tag}>{menuItem?.metadata?.menu?.[0]?.tags?.join(', ')}</p>
              <p className='opensans'>{menuItem?.metadata?.menu?.[0]?.price}</p>
            </div>
            <div className={styles.intro_content_quote}>
              <p className='opensans'>{menuItem?.metadata?.intro}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuIntro;