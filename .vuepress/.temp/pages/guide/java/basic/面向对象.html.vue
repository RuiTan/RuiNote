<template><div class="custom-container info"><p class="custom-container-title">摘自百度百科</p>
<p>面向对象(Object Oriented)是软件开发方法，一种编程范式。面向对象的概念和应用已超越了程序设计和软件开发，扩展到如数据库系统、交互式界面、应用结构、应用平台、分布式系统、网络管理结构、CAD技术、人工智能等领域。面向对象是一种对现实世界理解和抽象的方法，是计算机编程技术发展到一定阶段后的产物。</p>
<p>面向对象是相对于面向过程来讲的，面向对象方法，<strong>把相关的数据和方法组织为一个整体来看待</strong>，从更高的层次来进行系统建模，更贴近事物的自然运行模式。</p>
</div>
<h2 id="四大特性" tabindex="-1"><a class="header-anchor" href="#四大特性" aria-hidden="true">#</a> 四大特性</h2>
<p>Java是纯粹的面向对象的语言，所有类都继承自<code v-pre>Object</code>类。<strong>封装</strong>、<strong>抽象</strong>、<strong>继承</strong>和<strong>多态</strong>四大特性在Java中也是处处可以体现（有时也会省略抽象，称为三大特性）。</p>
<h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h3>
<p><strong>类</strong>是Java中封装的表现。我们通常给予一个类<strong>一系列属性</strong>和<strong>操作属性的方法</strong>。大多数属性通常使用<code v-pre>private</code>修饰以声明为私有属性，同时使用<code v-pre>public</code>修饰操作该属性的方法。这样做的目的是防止在类的外部<strong>直接对属性进行操作</strong>，同时将属性操作逻辑封装在类内部，对外部不可见。</p>
<h3 id="抽象" tabindex="-1"><a class="header-anchor" href="#抽象" aria-hidden="true">#</a> 抽象</h3>
<p>Java中<strong>接口</strong>和<strong>抽象类</strong>都提供了抽象的能力。我在理解和做选择时，通常把接口理解为<strong>能做xx事（xx-able）</strong>，把抽象类理解为<strong>是xx东西（is a xx）</strong>。当然，这只是一种辅助理解方式，并不是准确的定义，但是这种思路结合到Java中的<strong>单继承多实现</strong>机制，也比较合理：<strong>一个类可以有多种能力（实现多个接口），但是只能是一种东西（继承一个父类）</strong>。</p>
<h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3>
<p>前文说到Java是单继承体系，同时Java的类也必须有父类，当我们编写代码时未使用<code v-pre>extend</code>显式声明，Java虚拟机会自动帮我们继承自<code v-pre>Object</code>类，即<strong><code v-pre>Object</code>类是Java中所有类的公共父类</strong>。</p>
<h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h3>
<p>Java中的多态性允许我们以多种不同的方式执行相同的操作，实现的方式是通过<strong>继承父类</strong>和<strong>实现接口</strong>。</p>
<h4 id="运行时多态" tabindex="-1"><a class="header-anchor" href="#运行时多态" aria-hidden="true">#</a> 运行时多态</h4>
<p>下面代码使用了Java中的<code v-pre>Map</code>接口，定义了2个<code v-pre>Map</code>实例<code v-pre>map1</code>和<code v-pre>map2</code>，虽然类型都是<code v-pre>Map</code>，但是由于定义时<code v-pre>new</code>的方式不同，因此在执行<code v-pre>put()</code>方法时会以不同的方式执行。这种多态在Java中称作<strong>运行时多态</strong>，通过<strong>方法覆盖</strong>实现，即<code v-pre>HashMap</code>和<code v-pre>TreeMap</code>中均有对<code v-pre>Map</code>中的<code v-pre>put()</code>方法的重写（覆盖）。</p>
<CodeGroup>
<CodeGroupItem title="运行时多态">
<div class="language-Java ext-Java line-numbers-mode"><pre v-pre class="language-Java"><code>public class Polymorphism {
    public static void main(String[] args) {
        Map&lt;Integer, Integer&gt; map1 = new HashMap&lt;&gt;();
        Map&lt;Integer, Integer&gt; map2 = new TreeMap&lt;&gt;();
        map1.put(1, 1);
        map2.put(1, 1);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h4 id="编译时多态" tabindex="-1"><a class="header-anchor" href="#编译时多态" aria-hidden="true">#</a> 编译时多态</h4>
<p>下面代码通过定义了两个同名但具有不同参数列表的方法，在实际调用时，编译器会根据给定的<strong>参数类型</strong>和<strong>参数数量</strong>决定调用哪个方法。这种多态在Java中称作<strong>编译时多态</strong>，通过<strong>方法重载</strong>实现。</p>
<CodeGroup>
<CodeGroupItem title="编译时多态">
<div class="language-Java ext-Java line-numbers-mode"><pre v-pre class="language-Java"><code>public class Polymorphism {
    public static int add(int a, int b){
        return a+b;
    }
    public static int add(int a, int b, int c) {
        return a+b+c;
    }
    public static void main(String[] args) {
        int sum1 = add(1, 2);
        int sum2 = add(1, 2, 3);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></CodeGroupItem>
</CodeGroup>
<p>两个方法如果只有返回值不同，是达不到方法重载的定义条件的，这是因为有些时候方法的返回值并没有被用到。</p>
<p>若重载的两个方法其中一个参数列表是可变长参数，且调用时两个方法都能匹配，那么会选择完全匹配的方法。若匹配到的两个方法都是可变长参数，会报错。</p>
<CodeGroup>
<CodeGroupItem title="优先选择完全匹配">
<div class="language-Java ext-Java line-numbers-mode"><pre v-pre class="language-Java"><code>public class Polymorphism {
    public static int add(int a, int b){
        return a+b;
    }
    public static int add(int... nums) {
        int sum = 0;
        for (int i : nums) {
            sum += i;
        }
        return sum;
    }
    public static void main(String[] args) {
        // 两个方法都能匹配，编译器会选择add(int a, int b)
        int sum1 = add(1, 2); 
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="匹配两个可变长参数方法时会报错">
<div class="language-Java ext-Java line-numbers-mode"><pre v-pre class="language-Java"><code>public class Polymorphism {
    public static void add(int... nums) {
        // doSomething...
    }
    public static void add(String... nums) {
        // doSomething...
    }
    public static void main(String[] args) {
        // 两个方法都是可变长参数方法，报错
        add();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></CodeGroupItem>
</CodeGroup>
<p>另外，运算符重载也可实现多态，但是Java中不支持运算符重载。准确来说，Java不允许用户在代码层面重载运算符，而实际上，Java在语言底层已经对<code v-pre>+</code>、<code v-pre>&amp;</code>等符号进行了重载。</p>
</template>
