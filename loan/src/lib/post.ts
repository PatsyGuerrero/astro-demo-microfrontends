export interface IPost {
  id: string;
  title: string | null;
  slug: string | null;
  description: string | null;
  imageUrl: string | null;
}

export default class Post implements IPost {
  #m_id: string = ""; 
  #m_title: string | null = null;
  #m_slug: string | null = null;
  #m_description: string | null = null;
  #m_imageUrl: string | null = null;

  get id(): string {
    return this.#m_id;
  }

  set id(val: string) {
    this.#m_id = val;
  }

  get title(): string | null {
    return this.#m_title;
  }

  set title(val: string | null) {
    this.#m_title = val;
  }

  get slug(): string | null {
    return this.#m_slug;
  }

  set slug(val: string | null) {
    this.#m_slug = val;
  }

  get description(): string | null {
    return this.#m_description;
  }

  set description(val: string | null) {
    this.#m_description = val;
  }
  
  get imageUrl(): string | null {
    return this.#m_imageUrl;
  }

  set imageUrl(val: string | null) {
    this.#m_imageUrl = val;
  }
}