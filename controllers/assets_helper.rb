helpers do

  def image_tag(name, width_x = '', classx = '')
      "<img src='/images/#{name}' alt='#{name}' width='#{width_x}' class='#{classx}' />"
  end

  def link_to(name, url, target = '', classhtml = '')
      "<a href='/#{url}' target='#{target}' class='#{classhtml}' >#{name}</a>"
  end 

  def external_link(name, url, target = '', classhtml = '')
      "<a href='#{url}' target='#{target}' class='#{classhtml}' >#{name}</a>"
  end 

  def javascript_tag(name)
    '<script type="text/javascript" src="/js/'+"#{name}"+'"></script>'
  end

  def stylesheet_tag(name)
    '<link rel="stylesheet" type="text/css" href="/css/'+"#{name}"+'.css" />'
  end

  def favicon_tag(name)
    '<link rel="icon" type="image/png"href="/images/'+"#{name}"+'" />'
  end

end