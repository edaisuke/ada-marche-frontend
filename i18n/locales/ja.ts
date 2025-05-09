export default {
    site_name: "ada-marché.com",
    home: "ホーム",
    shop: "ショップ",
    guide: "決済ガイド",
    title: "商品一覧",
    price: "価格",
    switch_language: "言語を切り替える",
    loading: '読み込み中...',

    theme: {
        light: "ライトモード",
        dark: "ダークモード",
    },

    header: {
        title: "ada-marché.com",
        home: "ホームへ",
        shop: "ショップへ",
        guide: "決済ガイドへ",
        search: "検索",
        account: "アカウント",
        cart: "ショッピングカート",
    },

    goto : {
        facebook: "Facebookを見る",
        twitter: "Xを見る",
        instagram: "Instagramを見る",
    },

    top: {
        shop_now: "今すぐ購入へ",
    },
    
    account: {
        title: "マイアカウント",
        login: "ログイン",

        register: "新規登録",
        account: "ユーザー名またはメールアカウント",
        password: "パスワード",
        forgot_password: "パスワードをお忘れですか？",

        email: "メールアドレス",

        send_to_register_link: "登録用のリンクをメールアドレス宛に送信されます。",
        personal_info_usage: "個人情報はこのウェブサイトでの体験の向上やアカウントへのアクセスの管理、プライバシーポリシーに説明されている他の用途に使用されます。",
    },

    register: {
        title: "新規会員登録",
        name: "お名前",
        last_name: "姓",
        first_name: "名",
        last_kana: "セイ",
        first_kana: "メイ",
        display_name: "表示名",
        post_code: "郵便番号",
        prefecture: "都道府県",
        address1: "市区町村名",
        address2: "番地",
        address3: "建物名・部屋番号",
        phone_number: "電話番号",
        email: "メールアドレス",
        email_confirm: "メールアドレス確認",
        password: "パスワード",
        password_confirm: "パスワード確認",
        birthday: "生年月日",
        gender: "性別",
        job: "職業",

        agree_to: "に同意する",
        terms: "利用規約",
        privacy: "プライバシーポリシー",

        cancel: "同意しない",
        confirm: "確認する",
        register: "同意する",

        loading: '読み込み中...',
        select: '選択してください',

        error: {

            last_name: {
                required: "姓は必須です。",
                max: "姓は最大50文字までです。",
            },
            first_name: {
                required: "名は必須です。",
                max: "名は最大50文字までです。",
            },
            last_kana: {
                required: "セイは必須です。",
                max: "セイは最大50文字までです。",
                katakana: '全角カタカナのみで入力してください',
            },
            first_kana: {
                required: "メイは必須です。",
                max: "メイは最大50文字までです。",
                katakana: '全角カタカナのみで入力してください',
            },
            display_name: {
                required: "表示名は必須です。",
                max: "表示名は最大50文字までです。",
            },
            post_code: {
                required: "郵便番号は必須です。",
                max: "郵便番号は最大8文字までです。",
                regex: "郵便番号は半角数字のみかハイフンを含む形式で入力してください。",
            },
            prefecture: {
                required: "都道府県は必須です。",
            },
            address1: {
                required: "市区町村名は必須です。",
                max: "市区町村名は最大50文字までです。",
            },
            address2: {
                required: "番地は必須です。",
                max: "番地は最大50文字までです。",
            },
            address3: {
                max: "建物名・部屋番号は最大50文字までです。",
            },
            phone_number: {
                required: "電話番号は10文字以上で入力してください。",
                max: "電話番号は最大15文字までです。",
                only_number: "電話番号は半角数字で入力してください。",
            },
            email: {
                required: "メールアドレスは必須です。",
                max: "メールアドレスは最大100文字までです。",
                invalid: "メールアドレスの形式が正しくありません。",
                unique: "このメールアドレスはすでに登録されています。",
                same: "メールアドレスが一致しません。",
                confirm: "メールアドレス確認が一致しません。",
            },
            email_confirm: {
                required: "メールアドレス確認は必須です。",
                max: "メールアドレス確認は最大100文字までです。",
                regex: "メールアドレス確認の形式が正しくありません。",
                same: "メールアドレスと一致しません。",
            },
            password: {
                required: "パスワードは必須です。",
                min: "パスワードは10文字以上で入力してください。",
                max: "パスワードは最大100文字までです。",
                regex: "パスワードは半角英数字で入力してください。",
                strong: "パスワードは強力なものを選択してください。",
                weak: "パスワードは強力なものを入力してください。",
            },
            password_confirm: {
                required: "パスワード確認は必須です。",
                min: "パスワード確認は10文字以上で入力してください。",
                max: "パスワード確認は最大100文字までです。",
                same: "パスワードと一致しません。",
            },
            birthday: {
                required: "生年月日は必須です。",
                invalid: "正しい日付を選択してください",
            },
            gender: {
                required: "性別は必須です。",
                invalid: "性別が正しくありません。",
            },
            job: {
                required: "職業は必須です。",
                invalid: "職業が正しくありません。",
            },
            terms: {
                required: "利用規約に同意する必要があります。",
            },
            privacy: {
                required: "プライバシーポリシーに同意する必要があります。",
            }
        }
    },

    register_confirm: {
        title: '確認画面',
        password: '**********',
        password_hidden: '(セキュリティのため非表示)',
    },

    register_complete: {
        title: '仮登録完了',
        completed: '仮登録が完了しました！',
        thanks: 'ご登録ありがとうございます。',
        now_temporary_member_status: '現在、仮会員の状態です。',
        sent_to_your_email: 'ご入力いただいたメールアドレス宛に、ご本人様確認用のメールをお送りいたしました',
        click_activate_link: 'メール本文内のURLをクリックすると、本会員登録が完了となります。',
    },

    register_activated: {
        title: '会員登録完了',
        checking: '確認しています...',
        activated: '会員登録が完了しました。',
        login_and_shopping: 'メールアドレスとパスワードでログイン後、ショッピングをお楽しみください。',
    },

    forgot: {
        title: "パスワードをお忘れの場合",
        input_account_name: "登録したユーザー名またはメールアドレスを入力してください。",
        send_password_reset_link: "パスワードリセット用のリンクをお送りします。",
        account: "ユーザー名またはメールアドレス",
        reset: "パスワードをリセット",
    },

    trademark_usage_permission: "ada-marché.comで使用されているプロダクトロゴは、Cardano Foundationより正式に商標利用許可を得ております。",

    footer: {
        quick_links: "クイックリンク",
        home: "ホーム",
        shop: "ショップ",
        cart: "ショッピングカート",
        account: "マイアカウント",
        contact: "お問い合わせ",

        about: "当サイトについて",
        shipping: "送料について",
        terms: "利用規約",
        privacy: "プライバシーポリシー",
        tradelaw: "特商法に基づく表記",
    },

    shipping_charge: "送料は当サイトが負担いたします。",

    password: {
        show: "表示",
        hide: "非表示",
        strength: "強度",
        warning_label: "⚠ 警告",
        toggle_visibility: "パスワード表示切替",
        please_enter: "パスワードを入力してください。",
        
        strength_level: {
            0: "非常に弱い",
            1: "弱い",
            2: "普通",
            3: "強い",
            4: "非常に強い"
        },

        checklist: {
            upper: "英大文字を含む",
            lower: "英小文字を含む",
            number: "数字を含む",
            symbol: "記号を含む",
            length: "10文字以上",
            repeat: "同じ文字の繰り返しを避ける",
            sequence: "連続した文字列を避ける",
        },

        warning: {
            "This is a top-10 common password.": 'これは最もよく使われているパスワードの一つです。',
            "This is a top-100 common password.": 'これは非常によく使われているパスワードです。',
            "This is a very common password.": 'これはよく使われるパスワードです。',
            "This is similar to a commonly used password.": 'これはよく使われるパスワードに似ています。',
            "A word by itself is easy to guess.": '単語だけでは推測されやすいです。',
            "Names and surnames by themselves are easy to guess.": '名前や姓だけでは推測されやすいです。'
        },

        suggestions: {
            uncommonWords: '単語をさらに1つか2つ追加してください。珍しい単語がより安全です。',
            avoidSequences: '「1234」のような連番を避けてください。',
            avoidRecentYears: '最近の西暦年（例：2023）を避けてください。',
            avoidPersonalYears: 'あなたに関連する年（生年月日など）を避けてください。',
            capsDontHelp: '大文字を使ってもあまり強度は上がりません。',
            allCaps: 'すべて大文字でもすべて小文字でも推測のしやすさは変わりません。',
            reversed: '単語を逆さにしても大して安全にはなりません。',
            predictableSubstitution: '「\\u0040」を「a」の代わりに使うなどの置き換えは、あまり強化につながりません。',
            useFewWords: 'いくつかの単語を使用し、よく使われるフレーズは避けてください。',
            noNeedForSymbols: '記号、数字、大文字は必ずしも必要ありません。'
        }
    }

} as const
