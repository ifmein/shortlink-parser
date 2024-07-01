const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';

export const validateURL = (input: string) => {
  try {
    new URL(input);
    return true;
  } catch (err) {
    return false;
  }
};

export const followURL = async (shortURL: string) => {
  const resp = await fetch(shortURL, {
    method: 'HEAD',
    redirect: 'follow',
    headers: { 'User-Agent': userAgent },
  }).catch((err) => ({ ok: false, status: -1, statusText: 'unknow' }));
  if (!resp.ok) {
    console.log('===== 短链接解析失败');
    console.log('===== URL:', shortURL);
    console.log('===== Response:', resp.status, resp.statusText);
    return null;
  }
  return (resp as Response).url || null;
};
